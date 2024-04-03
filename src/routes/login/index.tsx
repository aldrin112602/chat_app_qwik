
import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import Modal from '../../components/custom_modal/modal';
// import postgres from 'postgres'



interface formStateInterface {
    username: string,
    password: string
}

interface modalContent {
    header: string,
    body: string,
    footer: string
}


export default component$(() => {

    const formState = useStore({
        username: "",
        password: ""
    } as formStateInterface);

    const modalContent = useStore({
        header: '',
        body: '',
        footer: ''
    } as modalContent);

    const openModal = useSignal(false);
    const closeModal = $(() => openModal.value = false);
    const formSubmit = useSignal(false);




    const handleSubmit = $(() => {
        if (formState.username.trim() == "" || formState.password.trim() == "") {
            modalContent.header = "Error"
            modalContent.body = "Please fill out all required fields."
            openModal.value = true;
            return;
        }
        formSubmit.value = true;
        
    });


    return (
        <>
            <div class="">
                <form onSubmit$={handleSubmit} preventdefault:submit class="">
                    <h4>Login</h4>
                    <div class="">
                        <label for="username" class="">Username</label>
                        <input onInput$={(e) => formState.username = (e.target as HTMLInputElement).value} value={formState.username} type="text" name="username" id="username" class="" />
                    </div>
                    <div class="">
                        <label for="password" class="">Password</label>
                        <input onInput$={(e) => formState.password = (e.target as HTMLInputElement).value} value={formState.password} type="password" name="password" id="password" class="" />
                    </div>
                    <div class="">
                        {
                            formSubmit.value && (
                                <button class="" type="button" disabled>
                                    <span role="status">Loading...</span>
                                </button>
                            )
                        }

                        {
                            !formSubmit.value && (
                                <button class="btn-block btn btn-success" type="submit">Login</button>
                            )
                        }
                    </div>
                </form>
            </div>

            {
                openModal.value && (
                    <Modal closeModal={closeModal}>
                        <div q:slot="header">
                            <strong>{modalContent.header}</strong>
                        </div>
                        <div q:slot="body">
                            <p>{modalContent.body}</p>
                        </div>
                    </Modal>
                )
            }
        </>
    );
})