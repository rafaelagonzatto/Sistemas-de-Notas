


//<script src="https://cdn.tailwindcss.com"></script>
const rules = {
      role1:  (prova) =>  0 < prova && 8 > prova,
      role2:  (EAP) => 0 < EAP && EAP < 1
}


const ids ={
    provas: ['input_prova_1', 'input_prova_2'],
    provaIntegrada: ['input_prova_integrada_1', 'input_prova_integrada_2'],
    nome: 'input_nome',
    email:  'input_email',
    eap: ['input_eap_1', 'input_eap_2']
}  



function getElementValue(id){
    document.getElementById(id).innerText
}

function adicionaDadosAluno(){

    for(prop in ids){
        if(prop === 'provas' || prop === 'provaIntegrada'){
            const value = [getElementValue(ids[prop][0]), getElementValue(ids[prop][1])]
            
            
            const isValid = rules.rule1()
            if(isValid) sessionStorage.setItem(ids[prop], )  
        
        }
        if(prop === 'eap'){

        }
        
    }

 


}