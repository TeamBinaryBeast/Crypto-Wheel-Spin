from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Credits(models.Model):
    user_f = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.FloatField()
    def __str__(self):
        return str(self.username)
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