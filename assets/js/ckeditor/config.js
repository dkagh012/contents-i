/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.toolbarGroups = [
		{ name: 'styles', groups: ['styles'] },
		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
		{ name: 'clipboard', groups: ['undo', 'clipboard'] },
		{ name: 'forms', groups: ['forms'] },
		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
		{ name: 'colors', groups: ['colors'] },
		{ name: 'insert', groups: ['insert'] },
		{ name: 'document', groups: ['document', 'mode', 'doctools'] },
		{ name: 'links', groups: ['links'] },
		{ name: 'tools', groups: ['tools'] },
		{ name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
		{ name: 'others', groups: ['others'] },
		{ name: 'about', groups: ['about'] }
	];

	config.removeButtons = 'NewPage,ExportPdf,Print,Scayt,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,Language,Flash,PageBreak,Iframe,Templates,Anchor,Link,Unlink,Preview,Source,About,Paste,PasteText,PasteFromWord,Subscript,Superscript,RemoveFormat,CopyFormatting,BidiLtr,BidiRtl,Styles,Font,Table,HorizontalRule,Smiley,SpecialChar,Maximize,Replace,Find,ShowBlocks';
};