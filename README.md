# google-ai-mode-removal
Userscript to remove AI Mode button from Google search results

# Google Search AI Mode Removal Tool

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-Install%20Now-brightgreen)](https://greasyfork.org/en/scripts/XXXXX-google-ai-mode-removal)

## Overview

This userscript provides a technical solution to remove the "AI Mode" (Modo IA) button from Google search results pages. The tool operates at the DOM level to permanently eliminate the unwanted interface element while preserving all core Google search functionality.

## Technical Specifications

- **Language**: JavaScript (ES2020+)
- **Execution Environment**: Modern browsers with userscript manager support
- **Target Platform**: Google Search results pages
- **Compatibility**: Chrome 90+, Firefox 88+, Edge 90+, Opera 76+
- **License**: MIT

## Features

- **Complete Element Removal**: Permanently removes AI Mode button from the DOM
- **Real-time Monitoring**: Continuous DOM observation prevents element reappearance
- **Cross-browser Compatibility**: Works with major browsers via userscript managers
- **Performance Optimized**: Minimal computational overhead
- **Theme Agnostic**: Compatible with both light and dark Google themes
- **Zero Configuration**: Automatic activation on target pages

## Installation

### Prerequisites
Install a userscript manager extension:
- **Chrome/Edge/Opera**: [Tampermonkey](https://www.tampermonkey.net/)
- **Firefox**: [Violentmonkey](https://violentmonkey.github.io/)

### Installation Procedure
1. Install the appropriate userscript manager for your browser
2. Navigate to the [Greasy Fork installation page](https://greasyfork.org/pt-BR/scripts/550836-google-ai-mode-removal)
3. Click "Install this script"
4. Confirm installation when prompted by the extension

## Implementation Details

The script employs a multi-layered removal strategy:

1. **Initial Scan**: DOM traversal 500ms after page load
2. **MutationObserver**: Real-time monitoring of DOM changes
3. **Periodic Verification**: Fallback checks every 2 seconds

### Core Algorithm
```javascript
function removeAIModeElements() {
    // DOM traversal and element removal logic
    // Identifies and removes elements containing "Modo IA" or "AI Mode"
}
