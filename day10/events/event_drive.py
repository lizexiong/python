#!/usr/bin/env python
#--*-- coding:utf-8 --*--

#event_drive.py

event_list = []

def run():
    for event in event_list:
        obj = event()
        obj.execute()

class  BaseHandler(object):
     """
    用户必须继承该类，从而规范所有类的方法（类似于接口的功能）
    """
     def execute(self):
         raise Exception("如果不重写这个方法就回报错")