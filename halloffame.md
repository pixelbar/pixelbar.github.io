---
layout: default
title: Hall of Fame
---

### Hall of Fame

Thank you to the security researchers who responsibly disclosed vulnerabilities to Pixelbar. If you would like to report an issue, please read our <a href="/responsibledisclosure">Responsible Disclosure</a> policy.

<table>
	<thead>
		<tr>
			<th>Researcher</th>
			<th>Date</th>
			<th>Finding</th>
			<th>Severity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>squ11z1</td>
			<td>November 2026</td>
			<td>
				<strong>Post-authenticated stored XSS on our wiki via the Mermaid extension.</strong>
				The extension forced Mermaid's <code>loose</code> security level and let page authors override it per diagram, so a stored diagram could run script when a viewer clicked a node. The same applied to hand-written <code>data-mermaid</code> elements. The fix forces <code>strict</code> mode server-side on every diagram and strips the security-related config keys.
			</td>
			<td>Medium<br />CVSS 5.4<br /><small>CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:N</small></td>
		</tr>
	</tbody>
</table>

Severity scores are our own assessment at the time of the fix and may differ from the reporter's.

Researchers are listed under the name they asked to be credited with.
