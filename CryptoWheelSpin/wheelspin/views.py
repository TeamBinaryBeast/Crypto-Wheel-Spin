from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import Credits,Rooms,BalanceDetails,Slots,GameDetails
import random,math,string

ERROR = JsonResponse({
    "RES" : "ERROR"
})

def home(request, *args, **kwargs):
    return render(request, 'wheelspin/index.html')
def err404(request, *args, **kwargs):
    return render(request, 'wheelspin/404.html')
def about(request, *args, **kwargs):
    return render(request, 'wheelspin/about.html')
def affiliate(request, *args, **kwargs):
    return render(request, 'wheelspin/affiliate.html')
def awards(request, *args, **kwargs):
    return render(request, 'wheelspin/awards.html')
def bonus(request, *args, **kwargs):
    return render(request, 'wheelspin/bonus.html')
def cart(request, *args, **kwargs):
    return render(request, 'wheelspin/cart.html')
def contact(request, *args, **kwargs):
    return render(request, 'wheelspin/contact.html')
def faq(request, *args, **kwargs):
    return render(request, 'wheelspin/faq.html')
def howItWork(request, *args, **kwargs):
    return render(request, 'wheelspin/how-it-work.html')
def lottery(request, *args, **kwargs):
    return render(request, 'wheelspin/lottery.html')
def play(request, *args, **kwargs):
    return render(request, 'wheelspin/play.html')
def termsConditionsDetails(request, *args, **kwargs):
    return render(request, 'wheelspin/terms-conditions-details.html')
def termsConditions(request, *args, **kwargs):
    return render(request, 'wheelspin/terms-conditions.html')
def tournaments(request, *args, **kwargs):
    return render(request, 'wheelspin/tournaments.html')
def game(request, *args, **kwargs):
    return render(request, 'wheelspin/wheelgame.html')
def slots(request, *args, **kwargs):
    return render(request, 'wheelspin/slots.html')
def slotlist(request, *args, **kwargs):
    slots = Slots.objects.all()
    return render(request, 'wheelspin/slotlist.html',{
        "slots":slots
    })
def gameresults(request, *args, **kwargs):
    return render(request, 'wheelspin/gameresults.html')
def transactions(request, *args, **kwargs):
    return render(request, 'wheelspin/transactions.html')
def exchange(request, *args, **kwargs):
    return render(request, 'wheelspin/exchange.html')
def inplay(request, *args, **kwargs):
    return render(request, 'wheelspin/inplay.html')


@login_required
def reqForROOM(request,bet,total):
    slots = Slots.objects.all()
    valid = False
    bet,total = int(bet),int(total)
    for slot in slots:
        if slot.bet==bet and slot.capacity==total:
            valid = True
    if not valid:
        return ERROR 
    isBroke = Credits.objects.get(user_f=request.user.id)
    if isBroke.amount < bet:
        return ERROR
    exist =  Rooms.objects.filter(status = "RUNNING",bet=bet,total=total)
    if exist:
        room = exist[0]
        me = User.objects.get(id=request.user.id)    
        active_users = sum([1 for user in room.users_m.all()])
        alreadyIN = [user for user in room.users_m.all() if user.username == me.username]
        if alreadyIN:
            return redirect('wheelspin:room',room_name = room.room_name)
        if active_users < room.total:
            room.users_m.add(me)
            return redirect('wheelspin:room',room_name = room.room_name)
        else:
            return ERROR
    else:
        me = User.objects.get(id=request.user.id)
        createRoom = Rooms(
            room_name = roomGEN(),
            bet = bet,
            deg = -1,
            total = total
        )
        createRoom.save()
        createRoom.users_m.add(me)
        return redirect('wheelspin:room',room_name = createRoom.room_name)

@login_required
def room(request, room_name, *args, **kwargs):
    exist =  Rooms.objects.get(room_name=room_name,status = "RUNNING")
    if not exist:
        return ERROR
    userValid = User.objects.get(id=request.user.id)
    isValid = [user for user in exist.users_m.all() if user.username == userValid.username]
    activeCouter = sum([1 for user in exist.users_m.all()])
    if isValid:
        return render(request,'wheelspin/room.html',{
            'room_name': room_name,
            'activeCouter' : activeCouter,
            'total' : exist.total,
        })
    else:
        return ERROR

@login_required
def wheelgame(request,room_name, *args, **kwargs):
    exist =  Rooms.objects.get(room_name=room_name)
    if not exist:
        return ERROR
    # EXIST
    userValid = User.objects.get(id=request.user.id)
    isValid = [user for user in exist.users_m.all() if user.username == userValid.username]
    activeCouter = sum([1 for user in exist.users_m.all()])
    if exist.status == "RUNNING" and exist.total == activeCouter and isValid:        
        cutMONEYCOMPANY(exist)
        exist.status = "FINISHED"
        deg = random.randint(1,359)
        per = 360/(exist.total)
        win_index = (exist.total-1) - ((math.ceil(deg/per)) - 1)
        allParticipents = [user for user in exist.users_m.all()]
        exist.winner = allParticipents[win_index].username
        exist.deg = deg
        addMoneyToWinner(exist,allParticipents[win_index].username)
        exist.showed.add(userValid)
        exist.save()
        
        userlist = [user.username for user in exist.users_m.all()]
        return render(request, 'wheelspin/wheelgame.html',{
            'room_name' : room_name,
            'userlist' : userlist,
            'deg' : deg ,
            'winner' : exist.winner
        })
    elif exist.status == "FINISHED" and exist.total == activeCouter and isValid:
        isShownToYou = [user for user in exist.showed.all() if user.username == userValid.username]
        if not isShownToYou:
            deg = exist.deg
            winner = exist.winner
            exist.showed.add(userValid)
            exist.save()
            countShow = sum([1 for user in exist.showed.all()])
            userlist = [user.username for user in exist.users_m.all()]
            if countShow == activeCouter:
                exist.delete()
            return render(request, 'wheelspin/wheelgame.html',{
                'room_name' : room_name,
                'userlist' : userlist,
                'deg' : deg ,
                'winner' : winner
            })
        else:
            ERROR
    else:
        return ERROR


def cutMONEYCOMPANY(room):
    for user in room.users_m.all():
        cutMoney = Credits.objects.get(user_f=user.id)
        cutMoney.amount = cutMoney.amount - (room.bet*.1)
        cutMoney.save()


def addMoneyToWinner(room,username):
    couter = sum([1 for user in room.users_m.all()])
    user = User.objects.get(username=username)
    addmoney = Credits.objects.get(user_f=user.id)
    addmoney.amount = addmoney.amount + ((room.bet)*couter)*.9
    addmoney.save()
    for user in room.users_m.all():
        gTrans = GameDetails(
            username=user,
            slot=room.bet,
            capcity=room.total,
            result="WIN" if room.winner==user.username else "LOSS",
            charge=(room.bet)*.1
        )
        gTrans.save()

def roomGEN(size=30, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))



@login_required
def profile(request):
    return render(request,'wheelspin/profile.html')
