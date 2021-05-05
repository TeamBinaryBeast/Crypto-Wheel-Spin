from django.shortcuts import render

# Create your views here.

def index(request, *args, **kwargs):
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