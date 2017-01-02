<?php $sq = get_search_query() ? get_search_query() : __( '', 'theprouty' ); ?>
<form method="get" class="search-form" action="<?php echo home_url(); ?>" >
	<fieldset>
		<input type="search" name="s" value="<?php echo $sq; ?>" />
		<input type="submit" value="Search" />
	</fieldset>
</form>