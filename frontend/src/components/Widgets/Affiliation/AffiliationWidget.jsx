import { defineMessages } from 'react-intl';

import ObjectListWidget from '@plone/volto/components/manage/Widgets/ObjectListWidget';

const messages = defineMessages({
  item: {
    id: 'Item',
    defaultMessage: 'Item',
  },
  addItem: {
    id: 'Add item',
    defaultMessage: 'Add item',
  },
  labelFunction: {
    id: 'Function',
    defaultMessage: 'Function',
  },
  labelSelectInstitution: {
    id: 'Select institution',
    defaultMessage: 'Select institution',
  },
});

const ItemSchema = (intl) => {
  return {
    title: intl.formatMessage(messages.item),
    addMessage: intl.formatMessage(messages.addItem),
    properties: {
      href: {
        title: intl.formatMessage(messages.labelSelectInstitution),
        widget: 'object_browser',
        mode: 'link',
        widgetOptions: {
          pattern_options: { selectableTypes: ['Subsite'] },
        },
        selectedItemAttrs: ['title'],
        allowExternals: false,
      },
      function: {
        title: intl.formatMessage(messages.labelFunction),
      },
    },
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.item),
        fields: ['href', 'function'],
      },
    ],
    required: ['text'],
  };
};

const AffiliationWidget = (props) => {
  const itemSchema = ItemSchema(props.intl);
  return (
    <ObjectListWidget
      schema={itemSchema}
      {...props}
      value={props.value?.items || props.default?.items || []}
      onChange={(id, value) => props.onChange(id, { items: value })}
    />
  );
};

export default AffiliationWidget;
