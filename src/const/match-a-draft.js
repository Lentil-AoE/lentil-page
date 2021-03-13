import {civList} from './civs';

const pizzaWolf = 'Pizza Wolf';
const pretzelHawk = 'Pretzel Hawk';
const bogSocratra = 'BogSocratra';
const reverseArena = 'ReverseArena';
const ponds = 'Ponds';
const arabia = 'Arabia';
const crochetbia = 'Crochetbia';
const tideout = 'Tideout';

export const team1 = {
    name: pizzaWolf,
    maps: [bogSocratra, ponds, reverseArena],
    civs: [
        civList.vietnamese,
        civList.berbers,
        civList.vikings,
        civList.indians,
        civList.bulgarians,
        civList.khmer,
        civList.koreans,
        civList.lithuanians,
        civList.mongols,
        civList.persians
    ]
}

export const team2 = {
    name: pretzelHawk,
    maps: [arabia, crochetbia, tideout],
    civs: [
        civList.aztecs,
        civList.britons,
        civList.saracens,
        civList.portuguese,
        civList.vietnamese,
        civList.slavs,
        civList.spanish,
        civList.incas,
        civList.japanese,
        civList.malay
    ]
}