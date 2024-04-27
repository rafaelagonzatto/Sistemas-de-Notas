const rules = {
  rule1: (prova) => {
    return 0 <= prova && 8 >= prova 
  },
  rule2: (EAP) => {
    return 0 <= EAP && EAP <= 1
  },
  rule3: (nota) => {
    if (nota >= 6) {
      return "Aprovado"
    } else if (nota > 6 && nota >= 3) {
      return "Recuperação"
    }
    else{
      return "Reprovado"
    }

  }
} 

const icons = {
  newPerson:'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAV9JREFUSEvtlEsrRWEUhp83Y5ciuU6OPyAz8xOlDJGJkoE/IGYuM5RfQJm6jEVkZqz8AJno5ERJMX716dviXPfeMpFvsvdgtZ79Pe9aW/zy0S/3548CbA8Ae8BoVHgFLEq6z6q0SpHtPuAG6Kpo9ggMSyplgdQCHAFT8QZrQAsQngvAsaTpnwKegQ5gMFFiuwDcAmVJPT8FlIFuoCDpLjRrBrDtUCepykgjRbvAelS0AcwDB5JmK2+QFdALXAOVKkK4I5LCDb+dTICopA1YBuZip31gW9Jb0jlpWi+PRFfuTc4NsD0Z3Q8B7fELX+IUrUo6ya3I9gqw2WQMlyTtfK1JlYHtceAMeAAC6FxSeA9jGgIfA7Zi+EVJl5V5NBxT2xdAEZiRFLa56tgOW3wInEqaSLNwnyHbThasVdJrHUAn8ASUJPVnBdTdxrS+awFzj2mar//4faQtzFv3D2hq7h2hz44Z5J3uawAAAABJRU5ErkJggg=="/>',
  edit: ' <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX1JREFUSEu1lLlKBEEQhr8/MTATRAMFwUBRWY9Y8Up9J1F8H5/A+3oDA+8DRRQDNfCISmqpkXWd2Z1e1k56qGm+v+qv6hb/vPTPfFoWMLMOYAnoBNYlfeQl25KAmXUBW8BkQK+AeUm39SLJAgHfBiaAB+ANGI7vKUmPtSJJAmbWDWwC48A5sAh8AhsRW5W00pKAmfUAO8BIAC7cFuArRCvAmqTlZAEz6wXcFoc/AS/AEHAHvMe3xyuSfP9ZTS0K+BEwCNwDs8ArsAeMBqkal3SZ1OQc+LSkm7opcng1njSmZtYXWWaZ18L3gTHAoXNFcBfMtSjgh8BA2FIE97hXULj+CJiZQ3fbAc+twMyuA+6730733Offb66P4hmw0CzzrKS8Cix+9jsk4D7/7vlpTMuv25pqUVVAkgJ+EE/BSTS0NLzIoqyC2sQcPiPpOfV5b2RRxjqOXiTDC8c0NcukHrQTntKD0ro+HA0fOzPLa3L7BEqTSh5s+lyX5BQe+waMlZsZ625MoAAAAABJRU5ErkJggg=="/>',
  trash: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKpJREFUSEvtlbENwjAQRd8v2IQKVsgYDJEh6BkBsQMzMEB6kJiF4lMFQZTY5yihSVxa1nvnb/ssZh6amU9WYLsGzgOF1JIuqSKTAtsVcAM2A5AXUElqhiQ/AtueIjJJH+5/BVNU32X0nsHYqL6jaUULELTb7sbWNz8qolWQvUVrRAuIqKQBljy0O7ArgQMPSftoNz0AJ2AblDyBo6RrSBCEhpZlP/0QJbHoDUJ3mhnQWSt8AAAAAElFTkSuQmCC"/>'
}


const getElementValue = (id) => document.getElementById(id).value ? document.getElementById(id).value : null
const clearTable = () => document.getElementById('studentTable').innerHTML = "";


const ids = {
  nome: 'input_nome',
  email: 'input_email',
  ra: 'input_ra',
  provas: ['input_prova_1', 'input_prova_2'],
  provaIntegrada: ['input_prova_integrada_1', 'input_prova_integrada_2'],
  eap: ['input_eap_1', 'input_eap_2'],
}

const clearInputs =  () => {
    for (var prop in ids) {
      if (prop === 'nome' || prop === 'email' ||  prop === 'ra') {
          setItemValue(ids[prop], '')
    
      }  else {
        for (let i = 0; i < ids[prop].length; i++) {
          setItemValue(ids[prop][i], '')
        }
      }
  }
}

const fillInputs = (index) => {
  const studentsArray = JSON.parse(localStorage.getItem('students'))  
  if(studentsArray){
    for (var prop in ids) {
      if (prop === 'nome' || prop === 'email' || prop === 'ra') {
          setItemValue(ids[prop], studentsArray[index][prop])
    
      }  else {
        for (let i = 0; i < ids[prop].length; i++) {
          setItemValue(ids[prop][i], studentsArray[index][prop][i])
        }
      }
  }
  }
}

function adicionarDadosAluno(id) {
  const student = {
    nome: '',
    email: '',
    provas: [],
    provaIntegrada: [],
    eap: [],
    ra: ''
  }


  for (var prop in ids) {
    if (prop === 'nome' || prop === 'email' || prop === 'ra') {
      const value = getElementValue(ids[prop])
      if (!value) {
        alert('Preencha o nome e email corretamente!')
        return
      }
      student[prop] = value
      continue
    } else if (prop === 'provas') {
      for (let i = 0; i < ids[prop].length; i++) {
        const value = getElementValue(ids[prop][i])
        const isValid = rules.rule1(value)
        if(!isValid){ 
          alert("Nota da prova fora do range de aceitação!")
          return 
        }
        student[prop][i] = value
        continue
      }
    } else {
      for (let i = 0; i < ids[prop].length; i++) {
        const value = getElementValue(ids[prop][i])
        const isValid = rules.rule2(value)
        if(!isValid){ 
          alert("Nota da EAP ou prova integrada fora do range de aceitação!")
          return
        }
        student[prop][i] = value
        continue
      }
    }
  }

  let element = document.getElementById('num')

  const studentsArray = JSON.parse(localStorage.getItem('students'));

  if (!studentsArray) {
      const students = [student];
      localStorage.setItem('students', JSON.stringify(students));
      element.innerText = `Número de alunos cadastrados: ${students.length}`;
  } else {
      if (!!id || id === 0) {
          const button = document.getElementById('btn');
          const buttonCancel = document.getElementById('btnCancel');
          buttonCancel.classList.add('hidden');
          
          studentsArray[id] = student;
          localStorage.setItem('students', JSON.stringify(studentsArray));
          element.innerText = `Número de alunos cadastrados: ${studentsArray.length}`;
          button.innerHTML = `${icons.newPerson} Cadastrar`
          button.setAttribute('onclick', 'adicionarDadosAluno()')

          clearInputs();
        } else {
          studentsArray.push(student);
          localStorage.setItem('students', JSON.stringify(studentsArray));
          element.innerText = `Número de alunos cadastrados: ${studentsArray.length}`;
      }
  }
  renderTable();
}

const renderTable = () =>  {
  clearTable();
  const studentsArray = JSON.parse(localStorage.getItem('students'));
  let element = document.getElementById('num')

  if (studentsArray) {
      var table = document.getElementById('studentTable');
      for (var i = 0; i < studentsArray.length; i++) {
          var newRow = document.createElement('tr');
          const firstBAvarage = Number(studentsArray[i].provas[0]) * 0.8 + Number(studentsArray[i].eap[0]) * 0.1 + Number(studentsArray[i].provaIntegrada[0]) * 0.1
          const secondBAvarage = Number(studentsArray[i].provas[1]) * 0.8 + Number(studentsArray[i].eap[1]) * 0.1 + Number(studentsArray[i].provaIntegrada[1]) * 0.1
          let finalAvarage = firstBAvarage+ secondBAvarage/2

          if (finalAvarage > 10) {
            finalAvarage = 10;
          }
          
       

          newRow.innerHTML = `

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="py-4 px-6">${studentsArray[i].nome}</td>
          <td class="py-4 px-6">${studentsArray[i].ra}</td>
          <td class="py-4 px-6">${studentsArray[i].email}</td>
          <td class="py-4 px-6">${firstBAvarage}</td>
          <td class="py-4 px-6">${secondBAvarage}</td>
          <td class="py-4 px-6">${studentsArray[i].eap[0]}</td>
          <td class="py-4 px-6">${studentsArray[i].eap[1]}</td>
          <td class="py-4 px-6">${studentsArray[i].provaIntegrada[0]}</td>
          <td class="py-4 px-6">${studentsArray[i].provaIntegrada[1]}</td>
          <td class="py-4 px-6">${studentsArray[i].provas[0]}</td>
          <td class="py-4 px-6">${studentsArray[i].provas[1]}</td>
          <td class="py-4 px-6">${finalAvarage}</td>
          <td class="py-4 px-6">${rules.rule3(finalAvarage)}</td>
          <td> 
          
          
                <button type="button" 
                class="
                gap-1
                text-white 
                 bg-gradient-to-br 
                from-green-400 
                to-blue-600 
                hover:bg-gradient-to-bl 
                focus:ring-4 
                focus:outline-none 
                focus:ring-green-200 
                dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        
                onclick="editItem(${i})">
       
              ${icons.edit}
        </button>
          
        <button type="button" 
        class="text-white 
        bg-gradient-to-br 
        from-pink-500 to-orange-400 
        hover:bg-gradient-to-bl focus:ring-4
         focus:outline-none focus:ring-pink-200
          dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 
          py-2.5 text-center me-2 mb-2"  onclick="removeItem(${i})">
          
          ${icons.trash}
          </button>
          </tr>
          `;
  
          table.appendChild(newRow);
      }
      element.innerText = `Numero de alunos cadastrados: ${studentsArray.length}`
  } 
}

renderTable();

const removeItem = (index) => {
  const studentsArray = JSON.parse(localStorage.getItem('students'))  
    if(studentsArray){
      studentsArray.splice(index, 1);
      localStorage.setItem('students', JSON.stringify(studentsArray))
      renderTable()
    }

  }


const cancelEdit = () => {
  const button = document.getElementById('btn');
  button.setAttribute('onclick', `adicionarDadosAluno()`);
  const buttonCancel = document.getElementById('btnCancel');
  buttonCancel.classList.add('hidden');
  button.innerHTML= `${icons.newPerson} Cadastrar`

  clearInputs();
}

const editItem = (index) => {
      const button = document.getElementById('btn');
      const buttonCancel = document.getElementById('btnCancel');
      
      fillInputs(index)
      button.setAttribute('onclick', `adicionarDadosAluno(${index})`);
      button.innerHTML = `${icons.edit} Editar` 
      buttonCancel.classList.remove('hidden');
      
  }

const setItemValue = (id, value) => {
  const element = document.getElementById(id)
  element.value = value
}








