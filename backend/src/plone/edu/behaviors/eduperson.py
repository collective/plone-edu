from plone.autoform.interfaces import IFormFieldProvider
from plone.edu import _
from plone.namedfile.field import NamedBlobImage
from plone.schema import Email
from plone.schema import JSONField
from plone.supermodel import model
from zope.interface import provider
from zope.schema import TextLine


import json

AFFILIATION_SCHEMA = json.dumps(
    {
        'type': 'object',
        'properties': {'items': {'type': 'array', 'items': {'type': 'object', 'properties': {}}}},
    }
)

@provider(IFormFieldProvider)
class IEduPersonData(model.Schema):
    """A Person in context of educational institutions."""

    academic_title = TextLine(
        title=_("label_academic_title", default="Academic title"),
        description=_("help_academic_title", default="The academic titles of the person."),
        required=False,
    )

    image = NamedBlobImage(
        title=_("label_image", default="Person image"),
        description=_("help_image", default="A picture of the person."),
        required=False,
    )

    affiliation = JSONField(
        title='Mixedfield: datagrid field for Plone',
        required=False,
        schema=AFFILIATION_SCHEMA,
        widget='affiliation_widget',
        default={'items': []},
        missing_value={'items': []},
    )
