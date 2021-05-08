from django.db import models
from django.contrib.auth.models import User
import datetime
from dateutil.parser import parse
import maya

#Create your models here.
class Credits(models.Model):
    user_f = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.FloatField()
    def __str__(self):
        return str(self.user_f)
    objects = models.Manager()
    class meta:
        managed = True
        db_table = 'Credits'

class Rooms(models.Model):
    room_name = models.CharField(max_length=100)
    users_m = models.ManyToManyField(User)
    bet = models.IntegerField()
    total = models.IntegerField()
    deg = models.IntegerField()
    winner = models.CharField(max_length=100,default="NO WINNER")
    status = models.CharField(max_length=20,default="RUNNING")
    def __str__(self):
        return str(self.room_name)
    objects = models.Manager()
    class meta:
        managed = True
        db_table = 'Rooms'


class GameDetails(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    slot = models.BigIntegerField()
    capcity = models.BigIntegerField()
    result = models.CharField(max_length=10)
    charge = models.FloatField()
    time = models.DateTimeField(auto_now_add=True, auto_now=False)


    def __str__(self):
        date_time_str = str(self.time)
        date_time_obj = maya.parse(date_time_str).datetime()
        return (self.username + " " + str(date_time_obj.date()) + " " + str(date_time_obj.time().strftime("%I:%M %p")) + " " + str(date_time_obj.tzinfo))
    


class BalanceDetails(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.FloatField()
    transactionType = models.CharField(max_length=20)
    balance = models.FloatField()
    charge = models.FloatField()
    time = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
        date_time_str = str(self.time)
        date_time_obj = maya.parse(date_time_str).datetime()
        return (self.username + " " + str(date_time_obj.date()) + " " + str(date_time_obj.time().strftime("%I:%M %p")) + " " + str(date_time_obj.tzinfo))


