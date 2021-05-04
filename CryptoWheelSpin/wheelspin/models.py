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