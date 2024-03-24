import { messages as paragonMessages } from '@edx/paragon';

import arMessages from './messages/ar.json';
import deMessages from './messages/de.json';
import deDEMessages from './messages/de_DE.json';
import es419Messages from './messages/es_419.json';
import faIRMessages from './messages/fa_IR.json';
import frMessages from './messages/fr.json';
import frCAMessages from './messages/fr_CA.json';
import hiMessages from './messages/hi.json';
import itMessages from './messages/it.json';
import itITMessages from './messages/it_IT.json';
import ptMessages from './messages/pt.json';
import ptPTMessages from './messages/pt_PT.json';
import ruMessages from './messages/ru.json';
import ukMessages from './messages/uk.json';
import zhCNMessages from './messages/zh_CN.json';
import trMessages from './messages/tr-tr.json';
import roMessages from './messages/ro.json';
import slMessages from './messages/sl.json';
// no need to import en messages-- they are in the defaultMessage field

const appMessages = {
   'tr-tr': trMessages,
  'ro': roMessages,
  'sl': slMessages,
  ar: arMessages,
  de: deMessages,
  'de-de': deDEMessages,
  'es-419': es419Messages,
  'fa-ir': faIRMessages,
  fr: frMessages,
  'fr-ca': frCAMessages,
  hi: hiMessages,
  it: itMessages,
  'it-it': itITMessages,
  pt: ptMessages,
  'pt-pt': ptPTMessages,
  ru: ruMessages,
  uk: ukMessages,
  'zh-cn': zhCNMessages,
};

export default [
  paragonMessages,
  appMessages,
];
