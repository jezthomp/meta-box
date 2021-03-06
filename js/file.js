jQuery(document).ready(function($) {
	// Add more file
	$('.rwmb-add-file').click(function() {
		var $this = $(this),
			$first = $this.parent().find('.file-input:first');

		$first.clone().insertBefore($this);

		return false;
	});

	// Delete file via Ajax
	$('.rwmb-uploaded').delegate('.rwmb-delete-file', 'click', function() {
		var $this = $(this),
			$parent = $this.parent(),
			field_id = $this.parents('.rwmb-field').find('.field-id').val(),
			data = {
				action: 'rwmb_delete_file',
				_wpnonce: $('#nonce-delete-file_' + field_id).val(),
				post_id: $('.rwmb-post-id:first').val(),
				field_id: field_id,
				attachment_id: $this.attr('rel')
			};

		$.post(ajaxurl, data, function(response) {
			if ('success' == response.status)
				$parent.remove();
			else
				alert(response.message);
		}, 'json');

		return false;
	});
});