# -*- coding: utf-8 -*-

from tornado.web import UIModule
from tornado import escape

class custom(UIModule):

    def render(self, *args, **kwargs):
        return escape.xhtml_escape('<h1>自定义UIModules模块</h1>')