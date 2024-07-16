interface MajorCredits{
  credits: number & { __brand: "MajorCredits.credits" };
}

interface MinorCredits {
  credits: number & { __brand: "MinorCredits.credits" };
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function SumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}