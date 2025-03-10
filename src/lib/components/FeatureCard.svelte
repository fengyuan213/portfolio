<script lang="ts">
	export let icon: string;
	export let title: string;
	export let description: string;
</script>

<div class="rounded-[12px] bg-[rgba(248,250,252,0.02)] p-4">
	<div class="mb-2 flex items-center gap-2">
		<div
			class="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] bg-[rgba(34,211,238,0.10)]"
		>
			{icon}
		</div>
		<h4 class="text-[14px] font-[500] text-[#F8FAFC]">{title}</h4>
	</div>
	<p class="text-[14px] text-[#94A3B8]">{description}</p>
</div>
