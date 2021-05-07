from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import Rooms
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
    return render(request, 'wheelspin/slotlist.html')


@login_required
def reqForROOM(request,bet,total):
    bet,total = int(bet),int(total)
    exist =  Rooms.objects.filter(status = "RUNNING",bet=bet)
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
        exist.status = "FINISHED"
        deg = random.randint(1,359)
        per = 360/(exist.total)
        win_index = math.trunc(deg/per)
        allParticipents = [user for user in exist.users_m.all()]
        exist.winner = allParticipents[win_index].username
        exist.deg = deg
        exist.save()
        print(deg,per,win_index,exist.winner)
        userlist = [user.username for user in exist.users_m.all()]
        return render(request, 'wheelspin/wheelgame.html',{
            'room_name' : room_name,
            'userlist' : userlist,
            'deg' : deg ,
            'winner' : exist.winner
        })
    elif exist.status == "FINISHED" and exist.total == activeCouter and isValid:
        userlist = [user.username for user in exist.users_m.all()]
        return render(request, 'wheelspin/wheelgame.html',{
            'room_name' : room_name,
            'userlist' : userlist,
            'deg' : exist.deg ,
            'winner' : exist.winner
        })
    else:
        return ERROR


def roomGEN(size=30, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))