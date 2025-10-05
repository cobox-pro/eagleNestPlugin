// 复制选中图片URL为Markdown格式的函数
async function copySelectedImagesAsMarkdown() {
	try {
		// 获取当前选中的图片
		const selectedItems = await eagle.item.getSelected();
		
		if (selectedItems.length === 0) {
			updateStatus('请先选择一张或多张图片', 'warning');
			return;
		}
		
		// 生成Markdown格式的文本
		let markdownText = '';
		
		for (const item of selectedItems) {
			// 使用图片名称作为alt文本，fileURL作为链接
			const altText = item.name || '图片';
			// const imageUrl = item.fileURL || item.url || '';
			const imageUrl = 'http://localhost:8181/eagle/' + item.id + '.png';
			
			if (imageUrl) {
				markdownText += `![${altText}](${imageUrl})\n`;
			}
		}
		
		if (markdownText) {
			// 移除最后的换行符
			markdownText = markdownText.trim();
			
			// 复制到剪贴板
			await eagle.clipboard.writeText(markdownText);
			
			updateStatus(`已复制 ${selectedItems.length} 张图片的Markdown链接到剪贴板`, 'success');
		} else {
			updateStatus('未找到有效的图片URL', 'error');
		}
		
	} catch (error) {
		console.error('复制失败:', error);
		updateStatus('复制失败: ' + error.message, 'error');
	}
}

// 更新状态显示
function updateStatus(message, type = 'info') {
	const messageEl = document.querySelector('#message');
	const timestamp = new Date().toLocaleTimeString();
	
	let className = '';
	switch (type) {
		case 'success':
			className = 'status-success';
			break;
		case 'warning':
			className = 'status-warning';
			break;
		case 'error':
			className = 'status-error';
			break;
		default:
			className = 'status-info';
	}
	
	messageEl.innerHTML = `
		<div class="${className}">
			<p><strong>${message}</strong></p>
			<small>时间: ${timestamp}</small>
		</div>
	`;
}

eagle.onPluginCreate((plugin) => {
	console.log('eagle.onPluginCreate');
	console.log(plugin);
	
	// 初始化界面
	document.querySelector('#message').innerHTML = `
		<div class="plugin-info">
			<h3>Eagle 图片 Markdown 复制器</h3>
			<p>选择图片后点击下方按钮，将图片URL复制为Markdown格式</p>
			<button id="copyBtn" class="copy-button">复制选中图片为 Markdown</button>
		</div>
	`;
	
	// 绑定按钮事件
	document.querySelector('#copyBtn').addEventListener('click', copySelectedImagesAsMarkdown);
});

eagle.onPluginRun(() => {
	console.log('eagle.onPluginRun');
	// 插件运行时自动执行复制功能
	copySelectedImagesAsMarkdown();
});

eagle.onPluginShow(() => {
	console.log('eagle.onPluginShow');
});

eagle.onPluginHide(() => {
	console.log('eagle.onPluginHide');
});

eagle.onPluginBeforeExit((event) => {
	console.log('eagle.onPluginBeforeExit');
});