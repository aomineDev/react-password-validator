import { Svg } from './styles'

export default function Fill ({ isComplete, isValid }) {
  return (
    <Svg
      isError={isComplete && !isValid}
      isSuccess={isComplete && isValid}
      isComplete={isComplete}
    >
      <circle cx="20" cy="20" r="20" />
    </Svg>
  )
}
