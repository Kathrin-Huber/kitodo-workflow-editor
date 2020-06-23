import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
    is
} from 'bpmn-js/lib/util/ModelUtil';


export default function (group, element, translate) {

    // Only return an entry, if the currently selected
    // element is a task.

    if (is(element, 'bpmn:Task')) {
        group.entries.push(entryFactory.selectBox({
            id: 'conditionType',
            description:  translate('kitodoConditionTypeDescription'),
            label: translate('kitodoConditionType'),
            selectOptions : [
                {name: translate('kitodoConditionTypeScript'), value: "script"},
                {name: translate('kitodoConditionTypeXPath'), value: "xpath"}],
            modelProperty: 'kitodoConditionType'
        }));

        group.entries.push(entryFactory.textField({
            id: 'conditionValue',
            description: translate('kitodoConditionValueDescription'),
            label: translate('kitodoConditionValue'),
            modelProperty: 'kitodoConditionValue'
        }));
    }

}