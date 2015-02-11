import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
export default AbstractModuleRoute.extend({
    addCapability: 'add_pricing',
    additionalModels: [{
        name: 'expenseAccountList',
        findArgs: ['lookup','expense_account_list']
    },{ 
        name: 'pricingTypes',
        findArgs: ['lookup','pricing_types']
    }],    
    allowSearch: true,
    moduleName: 'pricing',
    newButtonText: '+ new item',
    sectionTitle: 'Pricing',
    subActions: [{
        text: 'All Pricing Items',
        linkTo: 'pricing.index'
    }, {
        text: 'Imaging Pricing',
        linkTo: 'pricing.imaging'
    }, {
        text: 'Lab Pricing',
        linkTo: 'pricing.lab'
    }, {
        text: 'Procedure Pricing',
        linkTo: 'pricing.procedure'
    }, {
        text: 'Ward Pricing',
        linkTo: 'pricing.ward'
    }]
});
