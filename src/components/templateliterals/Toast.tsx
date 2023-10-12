
type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    // Exclude is a utility type that removes the second argument from the first argument
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, `center-center`> | 'center'
}

export const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
} 