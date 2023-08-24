interface ErrorMessageProps {
    age?: number
}
export const ErrorMessage = ({ age }: ErrorMessageProps) =>
    age && age < 18 ? <p>You are too yong!</p> : null
