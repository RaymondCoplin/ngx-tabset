# Ngx-Tabset

Project to enhance the knowloged about Templates, Template Refs, ng-container, ngTemplateOutlet, ContentChildren, etc. 📝

## Demo

Try out our [demo on Stackblitz](https://stackblitz.com/edit/ngx-tabset)!
  
## Usage

```typescript
<tab-panel>
	<tab title="Login" [context]="{$implicit: 'Name default', name: 'Raymond Coplin'}">
		<ng-template #tabContent let-name="name">
    		Titulo: {{ name }} <br />
            <span>Este es el contenido del Tab de Login</span>
        </ng-template>
    </tab>
    <tab title="Register">
        <ng-template #tabContent>
             <span>Tab de registro</span>
        </ng-template>
    </tab>
</tab-panel>
