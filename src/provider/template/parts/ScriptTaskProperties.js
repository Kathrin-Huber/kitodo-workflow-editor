import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
    is
} from 'bpmn-js/lib/util/ModelUtil';


export default function (group, element, translate) {

    // Only return an entry, if the currently selected
    // element is a task.

    if (is(element, 'bpmn:ScriptTask')) {
        group.entries.push(entryFactory.textField({
            id: 'scriptName',
            description: translate('scriptNameDescription'),
            label: translate('scriptName'),
            modelProperty: 'scriptName'
        }));

        group.entries.push(entryFactory.textField({
            id: 'scriptPath',
            description: translate('scriptPathDescription'),
            label: translate('scriptPath'),
            modelProperty: 'scriptPath'
        }));
    }

}