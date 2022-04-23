const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log("Ejemplo 1: Imprime el nombre de cada explorer con forEach")
explorers.forEach(obj =>  console.log(obj.name)) //imprime el nombre de todos los exploradores.

console.log("Ejemplo 2: Imprime stack de cada esplorer con forEach")
explorers.forEach(obj => console.log(obj.name, obj.stack)) //Implime el explorer y el estack

console.log("Ejemplo 3: Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
const numstacks = explorers.map(num => num.stack)
console.log(numstacks)

console.log("Ejemplo 4: Obtén la lista de explorers que tengan en su stack 'js', usa FILTER")
const filtrojs = explorers.filter((obj) => 
 obj.stack.includes('js'))
console.log(filtrojs)

console.log("Ejemplo 5: Busca el primer explorer que sea de la CDMX, usa FIND")
const citys = explorers.find((citys) => citys.city='CDMX')
console.log(citys)

console.log("Ejemplo 6: Obtén la suma de todos los exercises_completed, usa REDUCE")
const result_of_exercises = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log('La suma de total de las exercises_completed: ' +result_of_exercises)

console.log("Ejemplo 7: Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const areSomeTrue = explorers.some((b) =>  b.missions.frontend.exercisesFinished === true)
console.log(areSomeTrue)