import { $, component$, useStore, useSignal } from "@builder.io/qwik";
import Modal from '../../components/custom_modal/modal';



interface formStateStore {
    username: string,
    password: string,
    email: string,
    name: string
}

interface modalContent {
    header: string,
    body: string,
    footer: string
}



export default component$(() => {
    const formState = useStore({
        username: "",
        password: "",
        email: "",
        name: ""
    } as formStateStore);

    const modalContent = useStore({
        header: '',
        body: '',
        footer: ''
    } as modalContent);

    const openModal = useSignal(false);
    const closeModal = $(() => openModal.value = false);
    const formSubmit = useSignal(false);

    const handleSubmit = $(() => {
        const fieldsToValidate: Array<keyof formStateStore> = ['username', 'password', 'email', 'name'];
        if (fieldsToValidate.some(field => formState[field].trim() === "")) {
            modalContent.header = "Error"
            modalContent.body = "Please fill out all required fields."
            openModal.value = true;
            return;
        }
        formSubmit.value = true;

    })


    return (
        <>
            <div class="d-flex align-items-center justify-content-center p-5">
                <form onSubmit$={handleSubmit} preventdefault:submit class="p-4 col-10 col-lg-6 border rounded shadow-sm bg-white">
                    <h4>Signup</h4>
                    <div class="form-group mt-2">
                        <label for="name" class="form-label m-0">Name</label>
                        <input onInput$={(e) => formState.name = (e.target as HTMLInputElement).value} placeholder="What would we call you?" value={formState.name} type="text" name="name" id="name" class="form-control form-control-md" />
                    </div>
                    <div class="form-group mt-2">
                        <label for="email" class="form-label m-0">Email</label>
                        <input onInput$={(e) => formState.email = (e.target as HTMLInputElement).value} value={formState.email} type="email" name="email" id="email" class="form-control form-control-md" />
                    </div>
                    <div class="form-group mt-2">
                        <label for="username" class="form-label m-0">Username</label>
                        <input onInput$={(e) => formState.username = (e.target as HTMLInputElement).value} value={formState.username} type="text" name="username" id="username" class="form-control form-control-md" />
                    </div>
                    <div class="form-group mt-2">
                        <label for="password" class="form-label m-0">Password</label>
                        <input onInput$={(e) => formState.password = (e.target as HTMLInputElement).value} value={formState.password} type="password" name="password" id="password" class="form-control form-control-md" />
                    </div>
                    <div class="form-group mt-2 d-grid">
                    {
                            formSubmit.value && (
                                <button class="btn-block btn btn-dark" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>&nbsp;
                                    <span role="status">Loading...</span>
                                </button>
                            )
                        }

                        {
                            !formSubmit.value && (
                                <button class="btn-block btn btn-success" type="submit">Signup</button>
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