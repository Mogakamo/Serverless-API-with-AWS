const mongoose = require('mongoose');
const validator = require =('validator')

const NoteSchema = new mongoose.Schema(
	{
	  title: {
		type: String,
		required: true,
		validator: {
			validator(title) {
				return validator.isAlphanumeric(title);
			},
		},
	  },
	  description: {
		type: String,
		require: true,
		validator: {
			validator(description) {
				return validator.isAlphanumeric(description);
			},
		},
	  },
	  reminder: {
		type: Boolean,
		required: false,
		default: false,
	  },
	  status: {
		type: String,
		enum: ['completed', 'new'],
		default: 'new',
	  },
	  category: {
		type: String,
		enum: ['work', 'todos', 'technology', 'personal' ],
		default: 'todos',
	  },
	},
	{
		timestamp: true,
	}
);
