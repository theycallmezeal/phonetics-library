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
    constructor(language, features, words, ucla, speaker) {
        this.language = language;
        this.features = features;
        this.words = words;
        this.ucla = ucla;
        this.speaker = speaker;
    }
}

const datasets = [
    new Dataset(
        'Mandarin Chinese',
        ['tone'],
        [
            new Word('mandarin/ma1', 'ma˥', 'mother', '妈 mā'),
            new Word('mandarin/ma2', 'ma˩˥', 'numb', '麻 má'),
            new Word('mandarin/ma3', 'ma˧˩˧', 'horse', '马 mǎ'),
            new Word('mandarin/ma4', 'ma˥˩', 'scold', '骂 mà'),
        ],
        'https://phonetics.ucla.edu/vowels/chapter2/chinese/recording2.1.html',
        ''
    ),
    new Dataset(
        'Mandarin Chinese',
        ['places of articulation', 'fricative', 'affricate', 'dental', 'retroflex'],
        [
            new Word('mandarin/zhi', 't͡ʂɨ˥', 'classifier', '只 zhī'),
            new Word('mandarin/zi', 't͡sɨ˥', 'creak; squeak', '吱 zī'),
            new Word('mandarin/chi', 't͡ʂʰɨ˥', 'eat', '吃 chī'),
            new Word('mandarin/ci', 't͡sʰɨ˥', 'illness', '疵 cī'),
            new Word('mandarin/shi', 'ʂɨ˥', 'lion', '狮 shī'),
            new Word('mandarin/si', 'sɨ˥', 'things cut into thin strips', '丝 sī'),
            new Word('mandarin/ri', 'ʐɨ˥ ~ ɻɨ˥', 'the letter r', 'rī'),
        ],
        'https://phonetics.ucla.edu/appendix/languages/chinese/chinese.html',
        'Adam An'
    ),
]