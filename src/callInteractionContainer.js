import { LightningElement } from 'lwc';

const columns = [
    { label: 'Client Name', fieldName: 'clientName' },
    { label: 'Consumer Name', fieldName: 'consumerName' },
    { label: 'Responsible Party', fieldName: 'responsibleParty' },
    { label: 'Date of Service', fieldName: 'dateOfService', type: 'date' },
    { label: 'Balance Amount', fieldName: 'balanceAmount', type: 'currency' },
    { label: 'CCS File #', fieldName: 'ccsFileNum' }
];

const script = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras adipiscing. Ultricies integer quis auctor elit sed. Eget gravida cum sociis natoque penatibus et. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Sed arcu non odio euismod lacinia at. Amet nisl suscipit adipiscing bibendum est ultricies. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sagittis nisl rhoncus mattis rhoncus. Faucibus pulvinar elementum integer enim neque volutpat.';

export default class CallInteractionContainer extends LightningElement {
  script = script;
  columns = columns;
  data = [
    {
      clientName: 'Verizon',
      consumerName: 'Elon Musk',
      responsibleParty: 'Elon Musk',
      dateOfService: '2022-01-23T09:23:42.000Z',
      balanceAmount: 149.55,
      ccsFileNum: '324614859'
    },
    {
      clientName: 'Quest Diagnostics',
      consumerName: 'Eddie Money',
      responsibleParty: 'Eddie Money',
      dateOfService: '2022-03-14T12:05:08.000Z',
      balanceAmount: 149.55,
      ccsFileNum: '324614859'
    }
  ];
  originalAddress = 'ABC Street\nNew York, NY 10001';
  currentAddress = 'XYZ Street\nNew York, NY 10001';
  authorizedUsers = 'Mitch Parker\nLinda Murdock';
  notes = '- If authentication is refused, you may continue with the conversation as long as their full name has been verified.';
}