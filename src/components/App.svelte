<script>
    import {Alert} from 'flowbite-svelte'
    import {APP_STATUS,appStatus} from '../store'
    import Upload from './upload.svelte' 
    import Loading from './loading.svelte'
    import Chatting from './chatting.svelte'
</script>
{#if $appStatus === APP_STATUS.INIT}
<Upload />
{:else if $appStatus === APP_STATUS.LOADING}
<Loading />
{:else if $appStatus === APP_STATUS.CHATTING} 
<Chatting/>
{:else if $appStatus === APP_STATUS.ERROR}
<Alert >
    <span class="font-medium">Error
    </span>
    Change a few things up and try submitting again.
</Alert>
{:else}
<Alert >
    <span class="font-medium">UNKOWN STATUS
    </span>
    This status is not recognized
</Alert>
{/if}
