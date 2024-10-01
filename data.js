const languages = ['Mandarin Chinese']
const features = ['tone', 'retroflex', 'fricative', 'dental', 'affricate', 'fricative', 'alveolopalatal', 'glottal', 'labiodental', 'places of articulation']

class Word {
    constructor(url, ipa, gloss, orthography) {
        this.url = url;
        this.ipa = ipa;
        this.gloss = gloss;
        this.orthography = orthography;
    }
}

class Dataset {
    constructor(language, features, words, ucla) {
        this.language = language;
        this.features = features;
        this.words = words;
        this.ucla = ucla;
    }
}

const datasets = [
    new Dataset(
        'Mandarin Chinese',
        ['tone', 'asdjfk', 'asdfsd'],
        [
            new Word('', 'ma˥', 'mother', '妈 mā'),
            new Word('', 'ma˩˥', 'numb', '麻 má'),
            new Word('', 'ma˧˩˧', 'horse', '马 mǎ'),
            new Word('', 'ma˥˩', 'scold', '骂 mà'),
        ],
        'https://phonetics.ucla.edu/vowels/chapter2/chinese/recording2.1.html'
    ),
    new Dataset(
        'Mandarin Chinese',
        ['tone', 'asdjfk', 'asdfsd'],
        [
            new Word('', 'ma˥', 'mother', ''),
            new Word('', 'ma˩˥', 'numb', ''),
            new Word('', 'ma˧˩˧', 'horse', ''),
            new Word('', 'ma˥˩', 'scold', ''),
        ],
        ''
    ),
]