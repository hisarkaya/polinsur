import LocalizedStrings from 'react-localization';

/*
ğ – \u011f
Ğ – \u011e
ı – \u0131
İ – \u0130
ö – \u00f6
Ö – \u00d6
ü – \u00fc
Ü – \u00dc
ş – \u015f
Ş – \u015e
ç – \u00e7
Ç – \u00c7
*/

let localization = new LocalizedStrings({
  en: {
    required: 'This field is required',
    policyNo: 'Policy No',
    startDate: 'Start Date',
    endDate: 'End Date',
    submit: 'Submit',
    cancel: 'Cancel',
    addPolicy: 'Add Policy',
    addCustomer: 'Add Customer',
    customer: 'Customer',
    customers: 'Customers',
    policies: 'Policies',
    displayName: 'Display Name',
    tcVergiNo: 'Tax Number',
    contactNumber: 'Contact Number',
    corporate: 'Corporate',
    name: 'Name',
    surname: 'Surname',
    title: 'Title',
    failedFormat: 'Wrong format',
    newCustomer: 'New Customer',
    customerDetail: 'Customer Detail',
    newPolicy: 'New Policy',
    back: 'Back',
    policyType: 'Policy Type',
    selectOption: 'PLEASE SELECT',
    allrisk: 'ALL RISK',
    dask: 'DASK',
    trafic: 'TRAFIC',
    kasko: 'KASKO',
    proficiencyResponsibility: 'PROFICIENCY RESPONSIBILITY',
    home: 'HOME',
    fire: 'FIRE',
    plateNo: 'Plate No',
    documentNo: 'Document No',
    insuranceFee: 'Insurance Fee',
    net: 'Net',
    gross: 'Gross',
    comissionRate: 'Comission Rate',
    insuranceCompany: 'Insurance Company',
    insuranceCompanies: 'Insurance Companies',
    addAgency: 'Add Agency',
    newAgency: 'New Agency',
    agencyDetail: 'Agency Detail',
    agencies: 'Agencies',
    dateFormat: 'DD/MM/YYYY',
    agency: 'Agency',
    dashboard: 'Home',
    currencySign: 'GB',
    edit: 'Edit',
    delete: 'Delete',
    list: 'List',
    detail: 'Detail'
  },
  tr: {
    required: 'Bu alan zorunludur',
    policyNo: 'Poli\u00e7e No',
    startDate: 'Ba\u015flang\u0131\u00e7 Tarihi',
    endDate: 'Biti\u015f Tarihi',
    submit: 'Kaydet',
    cancel: '\u0130ptal',
    addPolicy: 'Poli\u00e7e Ekle',
    addCustomer: 'M\u00fc\u015fteri Ekle',
    customer: 'M\u00fc\u015fteri',
    customers: 'M\u00fc\u015fteriler',
    policies: 'Poli\u00e7eler',
    displayName: 'G\u00f6r\u00fcn\u00fcr Ad\u0131',
    tcVergiNo: 'TC/Vergi No',
    contactNumber: '\u0130leti\u015fim No',
    corporate: 'T\u00fczel',
    name: 'Ad\u0131',
    surname: 'Soyad\u0131',
    title: 'Unvan\u0131',
    failedFormat: 'Format hatal\u0131',
    newCustomer: 'Yeni M\u00fc\u015fteri',
    customerDetail: 'M\u00fc\u015fteri Detay\u0131',
    newPolicy: 'Yeni Poli\u00e7e',
    back: 'Geri',
    policyType: 'Poli\u00e7e T\u00fcr\u00fc',
    selectOption: 'L\u00dcTFEN SE\u00c7\u0130N\u0130Z',
    allrisk: 'ALL R\u0130SK',
    dask: 'DASK',
    trafic: 'TRAF\u0130K',
    kasko: 'KASKO',
    proficiencyResponsibility: 'MESLEK\u0130 SORUMLULUK',
    home: 'KONUT',
    fire: 'YANGIN',
    plateNo: 'Plaka No',
    documentNo: 'Ruhsat/Belge No',
    insuranceFee: 'Prim',
    net: 'Net',
    gross: 'Br\u00fct',
    comissionRate: 'Komisyon Oran\u0131',
    insuranceCompany: 'Sigorta \u015eirketi',
    insuranceCompanies: 'Sigorta \u015eirketleri',
    addAgency: 'Acente Ekle',
    newAgency: 'Yeni Acente',
    agencies: 'Acenteler',
    agencyDetail: 'Acente Detay\u0131',
    dateFormat: 'GG/AA/YYYY',
    agency: 'Acente',
    dashboard: 'Anasayfa',
    currencySign: 'TL',
    edit: 'D\u00fczenle',
    delete: 'Sil',
    list: 'Liste',
    detail: 'Detay'
  }
});

localization.setLanguage('tr');

export default localization;
