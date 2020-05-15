//Code for first set of tabs
$(document).ready(function () {

	$("ul.tabs li").click(function () {
		var tab_id = $(this).attr("data-tab");

		$("ul.tabs li").removeClass('current');
		$(".tab-content").removeClass("current");

		$(this).addClass("current");
		$("#" + tab_id).addClass("current");
	})
})

//Code for second set of tabs

$(document).ready(function () {

	$("ul.tabs-two li").click(function () {
		var tab_id = $(this).attr("data-tab");

		$("ul.tabs-two li").removeClass('current');
		$(".tab-two-content").removeClass("current");

		$(this).addClass("current");
		$("#" + tab_id).addClass("current");
	})


})

//Code for Choose Your Own Adventure
// Based on code from https://codepen.io/phantomesse/pen/OPORwO

// Story paths
var story = {
	intro: {
		prompt: 'Choose something to drink.',
		options: [{
			name: 'Coffee',
			path: 'coffee'
    }, {
			name: 'Tea',
			path: 'tea'
    }]
	},
	coffee: {
		prompt: 'Right. Stay wired. Choose something to write with.',
		options: [{
			name: 'Marker',
			path: 'marker'
    }, {
			name: 'Pen',
			path: 'pen'
    }]
	},
	pen: {
		prompt: 'Right. You are not a monster. You are done.',
		options: [{
			name: 'Start over.',
			path: 'intro'
    }]
	},
	tea: {
		prompt: 'Tea is not strong enough.',
		options: [{
			name: 'Try again.',
			path: 'intro'
    }]
	},
	marker: {
		prompt: 'You might be a monster.',
		options: [{
			name: 'Try Again',
			path: 'intro'
    }]
	}
}

function display_scenario(chosen_option) {
	var option_name = chosen_option.name;
	var option_path = chosen_option.path;
	var scenario = story[option_path];

	$('#prompt').empty();
	$('#options').empty();

	if (option_name) {
		$('<p>').html('You have chosen <b>' + option_name + '</b>').appendTo('#prompt');
	}

	$('<p>').html(scenario.prompt).appendTo('#prompt');

	function add_option_button(index) {
		if (index === scenario.options.length) {
			return;
		}

		var option = scenario.options[index];

		$('<button>')
			.html(option.name)
			.click(function (e) {

				e.preventDefault();
				display_scenario(option);
			})
			.appendTo('#options');

		add_option_button(index + 1);
	}
	add_option_button(0);
}

$(document).ready(function () {
	display_scenario({
		name: null,
		path: 'intro'
	});
});






//Second Story

var story2 = {
	intro2: {
		prompt: 'Choose a fruit',
		options: [{
			name: 'Banana',
			path: 'banana'
    }, {
			name: 'Apple',
			path: 'apple'
    }]
	},
	banana: {
		prompt: 'Right. Bananas are fundamentally superior. Now, choose a gum flavor.',
		options: [{
			name: 'Fruity',
			path: 'fruit'
    }, {
			name: 'Minty',
			path: 'mint'
    }]
	},
	mint: {
		prompt: 'Right. You are also not a monster. Congratulations.',
		options: [{
			name: 'Start over',
			path: 'intro2'
    }]
	},
	apple: {
		prompt: 'Apples are in no way better than bananas.',
		options: [{
			name: 'Try again',
			path: 'intro2'
    }]
	},
	fruit: {
		prompt: 'Gum should never be fruity. Definitely a monster.',
		options: [{
			name: 'Try Again',
			path: 'intro2'
    }]
	}
}

function display_scenario2(chosen_option2) {
	var option2_name = chosen_option2.name;
	var option2_path = chosen_option2.path;
	var scenario2 = story2[option2_path];

	$('#prompt2').empty();
	$('#options2').empty();

	if (option2_name) {
		$('<p>').html('You have chosen <b>' + option2_name + '</b>').appendTo('#prompt2');
	}

	$('<p>').html(scenario2.prompt).appendTo('#prompt2');

	function add_option_button(index) {
		if (index === scenario2.options.length) {
			return;
		}

		var option2 = scenario2.options[index];

		$('<button>')
			.html(option2.name)
			.click(function (e) {

				e.preventDefault();
				display_scenario2(option2);
			})
			.appendTo('#options2');

		add_option_button(index + 1);
	}
	add_option_button(0);
}

$(document).ready(function () {
	display_scenario2({
		name: null,
		path: 'intro2'
	});
});
