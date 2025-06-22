const Header = (props) => <h2>{props.name}</h2>

const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Content = (props) => {
  const parts = props.parts

  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = (props) => {
  const parts = props.parts

  return (
      <p>
        <strong>
          total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </strong>
      </p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course