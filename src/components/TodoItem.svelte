<script>
    export let index;
    export let todo;
    export let editTodo;
    export let removeTodo;
</script>

<div class="todo">
    {index+1}. {todo}
    <div class="actions">
        <i on:click={() => {
            editTodo(index)
        }} on:keydown={() => {}} class="fa-solid fa-pen"></i>
        <i on:click={() => {
            removeTodo(index)
        }} on:keydown={()=>{}} class="fa-solid fa-trash-can"></i>
    </div>
</div>

<style>
    .todo{
        border-left: 1px solid cyan;
        padding: 8px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .actions{
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.2rem;
    }

    .actions i{
        cursor: pointer;
    }

    .actions i:hover{
        color: coral;
    }
</style>