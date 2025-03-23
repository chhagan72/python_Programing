from django.db import models

class myApp(models.Model):
    name = models.CharField(max_length=25)
    email= models.EmailField(default='sample123@gmail.com')
    msg = models.TextField(default='Write something')


    def __str__(self):
        return self.name