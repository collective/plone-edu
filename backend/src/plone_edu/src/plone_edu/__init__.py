"""Init and utils."""
from zope.i18nmessageid import MessageFactory

import logging


PACKAGE_NAME = "plone_edu"

_ = MessageFactory("plone_edu")

logger = logging.getLogger("plone_edu")
