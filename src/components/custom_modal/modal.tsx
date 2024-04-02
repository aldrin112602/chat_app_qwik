import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import modalStyle from './style.css?inline'


interface ModalProps {
    addFooter?: boolean,
    closeModal: () => void
}

export default component$((props: ModalProps) => {
    useStylesScoped$(modalStyle);

    return (
        <>
            <div class='custom_modal'>
                <div class='header'>
                    <Slot name='header' />
                    <button class='btn btn-close btn-sm' onClick$={ props.closeModal }></button>
                </div>
                <div class='body'>
                    <Slot name='body' />
                </div>
                <div class={props.addFooter && 'footer'}>
                    {props.addFooter && (
                        <Slot name='footer' />
                    )}

                </div>
            </div>
        </>
    );
})