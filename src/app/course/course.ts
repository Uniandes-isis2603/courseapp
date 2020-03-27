export class Course {

  constructor(private nameA: string, private professorA: string, private creditsA: number) {

  }
  get name(): string { return this.nameA; }
  get professor(): string { return this.professorA; }
  get credits(): number { return this.creditsA; }
}
