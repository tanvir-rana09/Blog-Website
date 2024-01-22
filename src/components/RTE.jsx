import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";


const RealTimeEditor = ({ name, control, label, defaultValue = "" }) => {

	return (
		<div>
			{label && <label>{label}</label>}
			<Controller
				name={name || "content"}
				control={control}
				render={
					({ field: { onChange } }) => (
						<Editor
						apiKey='4c85j7flahjajs4y19jzxf3tt5m3lzld42kofio5lel10xah'
							initialValue={defaultValue}
							init={{
								height: 500,
								menubar: true,
								plugins: [
									'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
									'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
									'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
								],
								toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' + 'alignleft aligncenter alignright alignjustify | ' + 'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',

								content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
							}}
							onEditorChange={onChange}
						/>
					)
				}
			/>
		</div>
	)
}

export default RealTimeEditor;