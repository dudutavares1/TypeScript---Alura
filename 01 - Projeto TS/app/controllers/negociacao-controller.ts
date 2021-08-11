import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData;
    private inputQuantidade;
    private inputValor;


    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#Quantidade');
        this.inputValor = document.querySelector('#Valor');
    }


    adiciona() {
        const negociacao = new Negociacao(
            this.inputData,
            this.inputQuantidade,
            this.inputValor
        );
        console.log(negociacao);

    }
}