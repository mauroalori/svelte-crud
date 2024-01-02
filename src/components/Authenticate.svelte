<script>
    let email,
    password,
    confirmPass,
    error = false,
    register = false;

    function handleAuthenticate(){
        if(!email || !password || (register && !confirmPass)){
            error = true;
            return
        }
    }

    function handleRegister(){
        register = !register;
    }
</script>

<div class="authContainer">
    <form>
        <h1>{register ? "Registro" : "Iniciar sesión"}</h1>
        {#if error}
            <p class="error">Los datos ingresados son incorrectos</p>
        {/if}
        <label>
            <p class={email ? 'above' : 'center'}>Correo</p>
            <input bind:value={email} type="email" placeholder="Correo">
        </label>

        <label>
            <p class={password ? 'above' : 'center'}>Contraseña</p>
            <input bind:value={password} type="password" placeholder="Contraseña">
        </label>
        {#if register}
            <label>
                <p class={confirmPass ? 'above' : 'center'}>Confirmar contraseña</p>
                <input bind:value={confirmPass} type="password" placeholder="Confirmar contraseña">
            </label>
        {/if}
        <button type="button" on:click={handleAuthenticate}>Enviar</button>
    </form>
    <div class="options">
        <p>O</p>
        {#if register}
            <div>
                <p>¿Ya tienes una cuenta?</p>
                <p on:click={handleRegister} on:keydown={() => {}}>Iniciar sesion</p>
            </div>
        {:else}
            <div>
                <p>¿Aún no tienes una cuenta?</p>
                <p on:click={handleRegister} on:keydown={() => {}}>Registrarte</p>
            </div>
        {/if}
        

    </div>
</div>

<style>
    .authContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 2rem;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    form,
    .options{
        width: 400px;
        max-width: 100%;
        margin: 0 auto;
    }

    form input {
        width: 100%;
    }

    h1{
        text-align: center;
        font-size: 3rem;
    }

    form label{
        position: relative;
        border: 1px solid navy;
        border-radius: 5px;
    }

    form input{
        border: none;
        background: transparent;
        color: white;
        padding: 8px 14px
    }

    form input:focus{
        border: none;
        outline: none;
    }

    form button{
        background-color: navy;
        color: white;
        border: none;
        padding: 14px 0;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
    }

    form button:hover{
        background-color: #050599;
        color: gray;
    }

    .above,
    .center{
        position: absolute;
        transform: translateY(-50%);
        pointer-events: none;
        color: white;
        border-radius: 4px;
        padding: 0 6px;
        font-size: 0.8rem;
    }

    .above{
        top:0%;
        left: 24px;
        background-color: navy;
        border: 1px solid blue;
        font-size: 0.7rem;
    }

    .center{
        top:50%;
        left: 6px;
        border: 1px solid transparent;
        opacity: 0;
    }

    .error{
        color: coral;
        font-size: .9rem;
    }
    
    .options{
        padding: 14px 0;
        overflow: hidden;
        font-size: .9rem;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .options > p{
        position: relative;
        text-align: center;
        width: fit-content;
        margin: 0 auto;
        padding: 0 8px;
    }

    .options > p::after,
    .options > p::before{
        position: absolute;
        content: '';
        top: 50%;
        transform: translateY(-50%);
        width: 100vw;
        height: 1.5px;
        background-color: white;
    }

    .options > p::after{
        right: 100%;
    }

    .options > p::before{
        left: 100%;
    }

    .options div {
        display: flex;
        align-items: center;
        gap:8px;
    }

    .options div p:last-of-type{
        color: cyan;
        cursor: pointer;
    }
</style>