"""Init and utils."""

from collective.person.behaviors.person import IPersonData
from plone.app.dexterity.textindexer import utils
from zope.i18nmessageid import MessageFactory

import logging


_ = MessageFactory("plone.edu")

logger = logging.getLogger("plone.edu")

utils.searchable(IPersonData, "first_name")
utils.searchable(IPersonData, "last_name")
utils.searchable(IPersonData, "description")
