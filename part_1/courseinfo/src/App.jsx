const Header = (props) => {

  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {

  return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
  )
}

const Content = (props) => {
  const [first, second, third] = props.parts

  return (
    <div>
      <Part part={first} />
      <Part part={second} />
      <Part part={third} />
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
