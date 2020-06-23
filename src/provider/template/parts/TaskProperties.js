import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
    is
} from 'bpmn-js/lib/util/ModelUtil';


export default function (group, element, translate) {

    // Only return an entry, if the currently selected
    // element is a task.

    if (is(element, 'bpmn:Task')) {
        group.entries.push(entryFactory.checkbox({
            id: 'correction',
            description: translate('correctionDescription'),
            label: translate('correction'),
            modelProperty: 'correction'
        }));

        group.entries.push(entryFactory.selectBox({
            id: 'processingStatus',
            description: translate('processingstatusDescription'),
            label: translate('processingstatus'),
            selectOptions : [
                {name: translate('locked'), value: 0},
                {name: translate('closed'), value: 3}],
            modelProperty: 'processingStatus'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'typeMetadata',
            description: translate('metadataDescription'),
            label: translate('metadata'),
            modelProperty: 'typeMetadata'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'separateStructure',
            description: translate('separateStructureDescription'),
            label: translate('separateStructure'),
            modelProperty: 'separateStructure'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'typeImagesRead',
            description: translate('typeImagesReadDescription'),
            label: translate('typeImagesRead'),
            modelProperty: 'typeImagesRead'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'typeImagesWrite',
            description: translate('typeImagesWriteDescription'),
            label: translate('typeImagesWrite'),
            modelProperty: 'typeImagesWrite'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'typeGenerateImages',
            description: translate('typeGenerateImagesDescription'),
            label: translate('typeGenerateImages'),
            modelProperty: 'typeGenerateImages'
        }));


        group.entries.push(entryFactory.checkbox({
            id: 'typeValidateImages',
            description: translate('typeValidateImagesDescription'),
            label: translate('typeValidateImages'),
            modelProperty: 'typeValidateImages'
        }));


        group.entries.push(entryFactory.checkbox({
            id: 'typeExportDMS',
            description: translate('typeExportDMSDescription'),
            label: translate('typeExportDMS'),
            modelProperty: 'typeExportDMS'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'typeCloseVerify',
            description: translate('typeCloseVerifyDescription'),
            label: translate('typeCloseVerify'),
            modelProperty: 'typeCloseVerify'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'typeAcceptClose',
<<<<<<< Updated upstream
            description: getLocalizedStringForKey('typeAcceptClose'),
            label: getLocalizedStringForKey('typeAcceptClose'),
=======
            description: translate('typeAcceptCloseDescription'),
            label: translate('typeAcceptClose'),
>>>>>>> Stashed changes
            modelProperty: 'typeAcceptClose'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'typeAutomatic',
            description: translate('typeAutomaticDescription'),
            label: translate('typeAutomatic'),
            modelProperty: 'typeAutomatic'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'batchStep',
            description: translate('batchStepDescription'),
            label: translate('batchStep'),
            modelProperty: 'batchStep'
        }));

        group.entries.push(entryFactory.checkbox({
            id: 'concurrent',
            description: translate('concurrentDescription'),
            label: translate('concurrent'),
            modelProperty: 'concurrent'
        }));

    }
}