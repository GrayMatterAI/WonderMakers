<script>
    let feedback = '';

    function handleSubmit() {
      // handle form submission here
    }
  </script>

  <form class="form" on:submit|preventDefault={handleSubmit}>
    <textarea
      id="form-feedback"
      bind:value={feedback}
      placeholder="Enter your feedback here"
      title="Feedback"
      style="padding-bottom:1rem"
    />
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Submit Feedback
    </button>
  </form>
