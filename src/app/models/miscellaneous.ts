export interface ICandidate {
  id: number;
  fio: string;
  town: string;
  compliance: number;
  complete: number;
  reliability: number;
}

export interface IVacancy {
  id: string;
  name: string;
  region: string;
  contract_type: string;
  income: string;
  software_knowledges: string;
  software_skills: string;
  duties: string;
  requirements: string;
}
