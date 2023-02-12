// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (idNumber, arrDNA) => {
  return {
    specimenNum: idNumber,
    dna: arrDNA,
    mutate() {
      let randomIndex = Math.floor(Math.random() * 15);
      let original;
      let mutation;
      while (original === mutation) {
        original = this.dna[randomIndex];
        mutation = returnRandBase();
      }
      this.dna[randomIndex] = mutation;
      },
    compareDNA(dna2) {
      console.log(dna2.dna);
      let count = 0;
      let percent = 0;
      console.log(this.dna);
      this.dna.forEach((item, index) => {
        item === dna2["dna"][index] ? count++ : null;
        })
      percent = (count / 15 * 100).toFixed(2);
      console.log(percent);
    },
    willLikelySurvive() {
      let counter = 0;
      let survive = false;
      for (let item of this.dna) {
        (item === 'C' || item === 'G') ? counter++ : null;
      }
      survive = counter / 15;
      return survive > 0.6;
    }
  }
};
let ex1 = pAequorFactory(1, mockUpStrand());
let ex2 = pAequorFactory(2, mockUpStrand());
ex1.mutate();
ex1.compareDNA(ex2);
console.log(ex1.willLikelySurvive());

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)



