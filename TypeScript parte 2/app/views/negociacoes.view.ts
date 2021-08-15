export class NegociacoesView {
privent element: HTMLInputElement 
  constructor(seletor: string) {
    this.element = document.querySelector(Seletor)
  }

template(): string {
  return `
<table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th>Data</th>
      <th>Quantidade</th>
      <th>Valor</th>
    </tr>
  </thead>
</table>
`;
  }
  
  updade(): void {
    this.elements.innerHTML = this.template();
  }
}